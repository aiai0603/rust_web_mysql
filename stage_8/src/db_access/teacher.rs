use crate::error::MyError;
use crate::models::teacher::{CreateTeacher, Teacher, UpdateTeacher};
use sqlx::mysql::MySqlPool;

pub async fn get_all_teacher_db(pool: &MySqlPool) -> Result<Vec<Teacher>, MyError> {
    let rows = sqlx::query!("SELECT * FROM teacher",)
        .fetch_all(pool)
        .await?;

    let teachers: Vec<Teacher> = rows
        .iter()
        .map(|r| Teacher {
            id: r.id,
            name: r.name.clone(),
            picture_url: r.picture_url.clone(),
            profile: r.profile.clone(),
        })
        .collect();
    match teachers.len() {
        0 => Err(MyError::NotFound("not found teacher".into())),
        _ => Ok(teachers),
    }
}

pub async fn get_teacher_details_db(pool: &MySqlPool, teacher_id: i32) -> Result<Teacher, MyError> {
    let row = sqlx::query!(
        "SELECT *
            FROM teacher
            WHERE id = ? ",
        teacher_id
    )
    .fetch_one(pool)
    .await
    .map(|r| Teacher {
        id: r.id,
        name: r.name.clone(),
        picture_url: r.picture_url.clone(),
        profile: r.profile.clone(),
    })
    .map_err(|_err| MyError::NotFound("Teacher didn't founded".into()))?;

    Ok(row)
}

pub async fn post_new_teacher_db(
    pool: &MySqlPool,
    new_teacher: CreateTeacher,
) -> Result<Teacher, MyError> {
    let data = sqlx::query!(
        "INSERT INTO teacher (name, picture_url, profile)
        VALUES (?, ?, ?)",
        new_teacher.name,
        new_teacher.picture_url,
        new_teacher.profile
    )
    .execute(pool)
    .await?;

    let row = sqlx::query!(
        "SELECT *
            FROM teacher
            WHERE id = ? ",
        data.last_insert_id()
    )
    .fetch_one(pool)
    .await
    .map(|r| Teacher {
        id: r.id,
        name: r.name.clone(),
        picture_url: r.picture_url.clone(),
        profile: r.profile.clone(),
    })
    .map_err(|_err| MyError::NotFound("Teacher didn't founded".into()))?;

    Ok(row)
}

pub async fn delete_teacher_db(pool: &MySqlPool, id: i32) -> Result<String, MyError> {
    let course_row = sqlx::query!("DELETE FROM teacher where id = ?", id,)
        .execute(pool)
        .await?;
    Ok(format!("DeletedI{:?}record", course_row))
}

pub async fn update_teacher_details_db(
    pool: &MySqlPool,
    id: i32,
    update_teacher: UpdateTeacher,
) -> Result<Teacher, MyError> {
    let current_teacher_row = sqlx::query!(
        "SELECT *
            FROM teacher
            WHERE id = ? ",
        id
    )
    .fetch_one(pool)
    .await
    .map_err(|_err| MyError::NotFound("Teacher Id not found".into()))?;

    let name: String = if let Some(name) = update_teacher.name {
        name
    } else {
        current_teacher_row.name
    };
    let picture_url: String = if let Some(description) = update_teacher.picture_url {
        description
    } else {
        current_teacher_row.picture_url
    };
    let profile: String = if let Some(format) = update_teacher.profile {
        format
    } else {
        current_teacher_row.profile
    };

    let teacher_row = sqlx::query!(
        "UPDATE teacher SET name = ?, picture_url = ?, profile = ? where  id = ?",
        name,
        picture_url,
        profile,
        id
    )
    .execute(pool)
    .await;

    if let Ok(teacher) = teacher_row {
        let row = sqlx::query!(
            "SELECT *
                FROM teacher
                WHERE id = ? ",
            teacher.last_insert_id()
        )
        .fetch_one(pool)
        .await
        .map(|r| Teacher {
            id: r.id,
            name: r.name.clone(),
            picture_url: r.picture_url.clone(),
            profile: r.profile.clone(),
        })
        .map_err(|_err| MyError::NotFound("Teacher didn't founded".into()))?;
    
        Ok(row)
    } else {
        Err(MyError::NotFound("Teacher id not found".into()))
    }
}
