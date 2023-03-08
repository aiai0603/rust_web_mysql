use actix_web::http;
use actix_web::{web, App, HttpServer};
use dotenv::dotenv;
use error::MyError;
use sqlx::mysql::MySqlPoolOptions;
use std::env;
use std::io;
use std::sync::Mutex;
use actix_cors::Cors;

#[path = "../db_access/mod.rs"]
mod db_access;
#[path = "../error.rs"]
mod error;
#[path = "../handlers/mod.rs"]
mod handlers;
#[path = "../models/mod.rs"]
mod models;
#[path = "../routers.rs"]
mod routers;
#[path = "../state.rs"]
mod state;

use routers::*;
use state::AppState;

#[actix_rt::main]
async fn main() -> io::Result<()> {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL 没有在 .env 文件里设置");

    let db_pool = MySqlPoolOptions::new()
        .connect(&database_url)
        .await
        .unwrap();

    let shared_data = web::Data::new(AppState {
        health_check_response: "I'm OK.".to_string(),
        visit_count: Mutex::new(0),
        db: db_pool,
    });
    let app = move || {

        let cors = Cors::default()
        .allowed_origin("http://localhost:8080/")
        .allowed_origin_fn(|origin, _req_head| {
            origin.as_bytes().starts_with(b"http://localhost")
        }).allowed_methods(vec!["GET","POST","DELETE"])
        .allowed_headers(vec![http::header::AUTHORIZATION,http::header::ACCEPT])
        .allowed_header(http::header::CONTENT_TYPE)
        .max_age(3600);
    
        App::new()
            .app_data(shared_data.clone())
            .app_data(web::JsonConfig::default().error_handler(|_err, _req| {
                MyError::InvalidInput(" please  provide valid json input".to_string()).into()
            }))
            .configure(general_routes)
            .configure(course_routes)
            .wrap(cors)
            .configure(teacher_routes)
    };

    HttpServer::new(app)
        .bind("127.0.0.1:3077")?
        .run()
        .await
}
