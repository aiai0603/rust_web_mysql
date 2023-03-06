use actix_web::web;
use crate::handlers::*;
use actix_files as fs;

pub fn app_config(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("")
        .service(fs::Files::new("/static","./static").show_files_listing())
        .service(web::resource("/").route(web::get().to(get_all_teacher)))
        .service(web::resource("/register").route(web::get().to(show_register_from)))
        .service(web::resource("/register-post").route(web::post().to(handle_register)))
            
    );
}
