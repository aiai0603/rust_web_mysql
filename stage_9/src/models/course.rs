use chrono::{DateTime, Utc};
use js_sys::Promise;
use serde::{Deserialize, Serialize};
use serde_json::from_str;
// use crate::models::course::Course;
use crate::errors::MyError;
use wasm_bindgen::{JsCast, JsValue, prelude::wasm_bindgen};
use wasm_bindgen_futures::JsFuture;
use web_sys::{Request, RequestInit, RequestMode, Response};

#[derive(Serialize, Deserialize, Debug)]
pub struct Course {
    pub id: i32,
    pub teacher_id: i32,
    pub name: String,
    pub time: Option<DateTime<Utc>>,

    pub description: Option<String>,
    pub format: Option<String>,
    pub structure: Option<String>,
    pub duration: Option<String>,
    pub price: Option<i32>,
    pub language: Option<String>,
    pub level: Option<String>,
}

pub async fn get_course_by_teacher(teacher_id: i32) -> Result<Vec<Course>, MyError> {
    let mut opts = RequestInit::new();
    opts.method("GET");
    opts.mode(RequestMode::Cors);

    let url = format!("http://localhost:3077/courses/{}", teacher_id);

    let request = Request::new_with_str_and_init(&url, &opts)?;

    request.headers().set("Accept", "application/json")?;

    let window = web_sys::window().ok_or("no window exisits".to_string())?;

    let resp_value = JsFuture::from(window.fetch_with_request(&request)).await?;

    assert!(resp_value.is_instance_of::<Response>());

    let resp: Response = resp_value.dyn_into().unwrap();

    let json = JsFuture::from(resp.json()?).await?;

    let courses: Vec<Course> = json.into_serde().unwrap();

    Ok(courses)
}

pub async fn delete_course(teacher_id: i32, course_id: i32) -> () {
    let mut opts = RequestInit::new();
    opts.method("DELETE");
    opts.mode(RequestMode::Cors);

    let url = format!("http://localhost:3077/courses/{}/{}", teacher_id, course_id);

    let request = Request::new_with_str_and_init(&url, &opts).unwrap();

    request.headers().set("Accept", "application/json").unwrap();

    let window = web_sys::window()
        .ok_or("no window exisits".to_string())
        .unwrap();

    let resp_value = JsFuture::from(window.fetch_with_request(&request))
        .await
        .unwrap();

    assert!(resp_value.is_instance_of::<Response>());

    let resp: Response = resp_value.dyn_into().unwrap();

    let json = JsFuture::from(resp.json().unwrap()).await.unwrap();

    let courses: Course = json.into_serde().unwrap();
}


#[wasm_bindgen]
pub async fn add_course(name: String, desc: String) -> Result<Promise, JsValue> {
    let mut opts = RequestInit::new();
    opts.method("POST");
    opts.mode(RequestMode::Cors);

    let str_json = format!(
        r#"{{
            "teacher_id":1,
            "name":"{}",
            "description":"{}"
        }}"#,
        name, desc
    );
    opts.body(Some(&JsValue::from_str(str_json.as_str())));

    let url = "http://localhost:3077/courses/";

    let request = Request::new_with_str_and_init(&url, &opts)?;

    request.headers().set("Accept", "application/json")?;
    request.headers().set("Content-type", "application/json")?;

    let window = web_sys::window()
        .ok_or("no window exisits".to_string())
        .unwrap();

    let resp_value = JsFuture::from(window.fetch_with_request(&request))
        .await
        .unwrap();

    assert!(resp_value.is_instance_of::<Response>());

    let resp: Response = resp_value.dyn_into().unwrap();

    Ok(resp.json()?)
}
