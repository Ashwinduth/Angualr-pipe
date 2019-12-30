import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'userid'
})
export class userPipe implements PipeTransform {
    transform(id, text) {
        return id + "" + text
    }
}