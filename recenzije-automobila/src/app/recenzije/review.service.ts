import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private reviews: any[] = [];
  private reviewSubject = new Subject<any>();

  addReview(review: any) {
    this.reviews.push(review);
    this.reviewSubject.next(review); // Emitovanje nove recenzije
  }

  getReviews() {
    return this.reviews;
  }

  getReviewSubject() {
    return this.reviewSubject.asObservable(); // Vraćanje Observable za pretplatu
  }
}
