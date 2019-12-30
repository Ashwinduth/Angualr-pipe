import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: "root"
})
export class Apiservice {
    constructor(private http: HttpClient) {

    }
    fetchuser() {
        return this.http.get("https://jsonplaceholder.typicode.com/users")
    }
}