import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pulsating-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './pulsating-button.component.html',
  styleUrl: './pulsating-button.component.css'
})
export class PulsatingButtonComponent {
  @Input() buttonLink!: string;
  @Input() buttonText!: string;
  @Input() padding!: string;
  @Input() color!: string;
  @Input() boxShadowColor!: string;
  @Input() bgColor!: string;
  @Input() margin!: string;  
  @Input() buttonClickEvent!: (event: Event) => void;

  getPulsatingStyles = () => {
    return {
      padding : this.padding,
      color : this.color,
      boxShadow : `0 0 0 0 ${this.boxShadowColor}`,
      backgroundColor: this.bgColor,
      cursor: "pointer",
      borderRadius : "28px",
      margin: this.margin,
    }
  };

}
