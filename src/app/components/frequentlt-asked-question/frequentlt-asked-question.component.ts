import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-frequentlt-asked-question',
  imports: [CommonModule],
  templateUrl: './frequentlt-asked-question.component.html',
  styleUrl: './frequentlt-asked-question.component.scss',
})
export class FrequentltAskedQuestionComponent {
  faqs = [
    'How can I pay the balance amount in case of pay on delivery?',
    'What documents do I need?',
    'How will I know the time of delivery?',
    'What happens if I fail to make the remaining payment before delivery?',
  ];
}
