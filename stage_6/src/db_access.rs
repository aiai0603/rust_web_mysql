use super::error::MyError;
use crate::models::*;
use sqlx::mysql::MySqlPool;

pub async fn get_courses_for_teacher_db(
    pool: &MySqlPool,
    teacher_id: i32,
) -> Result<Vec<Course>, MyError> {
    let rows = sqlx::query!(
        "SELECT id, teacher_id, name, time
        FROM course
        WHERE teacher_id = ?",
        teacher_id
    )
    .fetch_all(pool)
    .await?;

    let courses: Vec<Course> = rows
        .iter()
        .map(|r| Course {
            id: Some(r.id),
            teacher_id: r.teacher_id,
            name: r.name.clone(),
            time: Some(r.time.unwrap()),
        })
        .collect();
    match courses.len() {
        0 => Err(MyError::NotFound("Course not found for teacher".into())),
        _ => Ok(courses),
    }
}

pub async fn get_course_details_db(
    pool: &MySqlPool,
    teacher_id: i32,
    course_id: i32,
) -> Result<Course, MyError> {
    let row = sqlx::query!(
        "SELECT id, teacher_id, name, time
            FROM course
            WHERE teacher_id = ? and id = ?",
        teacher_id,
        course_id
    )
    .fetch_one(pool)
    .await;

    if let Ok(row) = row {
        Ok(Course {
            id: Some(row.id),
            teacher_id: row.teacher_id,
            name: row.name.clone(),
            time: Some(row.time.unwrap()),
        })
    } else {
        Err(MyError::NotFound("Course didn't founded".into()))
    }
}

pub async fn post_new_course_db(pool: &MySqlPool, new_course: Course) -> Result<Course, MyError> {
    let data = sqlx::query!(
        "INSERT INTO course ( teacher_id, name)
            VALUES ( ?, ?)",
        new_course.teacher_id,
        new_course.name,
    )
    .execute(pool)
    .await?;

    let row = sqlx::query!(
        "SELECT id, teacher_id, name, time
        FROM course
        WHERE id = ?",
        data.last_insert_id()
    )
    .fetch_one(pool)
    .await?;
    Ok(Course {
        id: Some(row.id),
        teacher_id: row.teacher_id,
        name: row.name.clone(),
        time: Some(row.time.unwrap()),
    })
}
