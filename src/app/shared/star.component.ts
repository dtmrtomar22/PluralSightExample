import { Component, OnChanges, Input , EventEmitter , Output} from '@angular/core';

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls: ['./star.component.css']
})


export class StarComponent implements OnChanges{
    @Input() rating:number;    
    starwidth:number;
    @Output() ratingClicked : EventEmitter<string> = 
                    new EventEmitter<string>();
    ngOnChanges() : void {
        this.starwidth = this.rating * 75 / 5;
    }
    onClick(): void{
        this.ratingClicked.emit('item ' + this.rating + ' is clicked' );
        console.log('The rating ' + this.rating + ' was clicked');        
    }
}