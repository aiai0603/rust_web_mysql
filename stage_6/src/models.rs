use actix_web::web;
use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};

#[derive(Deserialize, Serialize, Debug, Clone)]
pub struct Course {
    pub id: Option<u64>,
    pub teacher_id: i32,
    pub name: String,
    pub time: Option<DateTime<Utc>>,
}

impl From<web::Json<Course>> for Course {
    fn from(course: web::Json<Course>) -> Self {
        Course {
            id: course.id,
            teacher_id: course.teacher_id,
            name: course.name.clone(),
            time: course.time,
        }
    }
}
