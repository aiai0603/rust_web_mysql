use dotenv::dotenv;
use sqlx::mysql::MySqlPoolOptions;
use std::env;
use std::io;

#[derive(Debug)]
pub struct Course {
    pub id: u64,
    pub teacher_id: i32,
    pub name: String,
}

#[actix_rt::main]
async fn main() -> io::Result<()> {
    dotenv().ok();
    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL 没有在 .env 文件里设置");
    let db_pool = MySqlPoolOptions::new()
        .connect(&database_url)
        .await
        .unwrap();

    println!("db_pool is : {:?}", db_pool);
    let course_rows = sqlx::query!(
        "select id, teacher_id, name, time from course where id = ? ",
        1
    )
    .fetch_all(&db_pool)
    .await
    .unwrap();

    let mut courses_list = vec![];
    for row in course_rows {
        courses_list.push(Course {
            id: row.id,
            teacher_id: row.teacher_id,
            name: row.name
        })
    }
    println!("Courses = {:?}", courses_list);

    Ok(())
}
