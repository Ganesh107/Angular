import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SharedService{
    sharedVal = new BehaviorSubject(0)
    sharedValExposed = this.sharedVal.asObservable()
    updateVal(newVal: number): void{
        this.sharedVal.next(newVal)
    }
}