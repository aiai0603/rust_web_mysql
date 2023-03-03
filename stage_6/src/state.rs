// use crate::modelds::Course;
use sqlx::MySqlPool;
use std::sync::Mutex;

pub struct AppState {
    pub health_check_response: String,
    pub visit_count: Mutex<u32>,
    pub db: MySqlPool,
    // pub courses: Mutex<Vec<Course>>,
}
