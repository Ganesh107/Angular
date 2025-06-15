import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SharedService{
    private sharedVal = new BehaviorSubject(0)
    readonly sharedValExposed = this.sharedVal.asObservable()
    updateVal(newVal: number): void{
        this.sharedVal.next(newVal)
    }
}