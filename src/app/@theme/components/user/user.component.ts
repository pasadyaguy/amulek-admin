import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  imageBackgroundStyle!: SafeStyle | null;

  /**
   * Specifies a name to be shown on the right of a user picture
   * @type string
   */
  @Input() name: string = 'Anonymous';

  /**
   * Specifies a title to be shown under the **name**
   * @type string
   */
  @Input() title!: string;

  /**
   * Absolute path to a user picture or base64 image.
   * User name initials will be shown if no picture specified (JD for John Doe).
   * @type string
   */
  @Input()
  set picture(value: string) {
    this.imageBackgroundStyle = value
      ? this.domSanitizer.bypassSecurityTrustStyle(`url(${value})`)
      : null;
  }

  /**
   * Color of the area shown when no picture specified
   * @type string
   */
  @Input() color!: string;

  /**
   * Whether to show a user name or not
   */
  @Input()
  get showName(): boolean {
    return this._showName;
  }
  set showName(val: boolean) {
    this._showName = this.convertToBoolProperty(val);
  }
  private _showName: boolean = true;

  /**
   * Whether to show a user title or not
   * @type boolean
   */
  @Input()
  get showTitle(): boolean {
    return this._showTitle;
  }
  set showTitle(val: boolean) {
    this._showTitle = this.convertToBoolProperty(val);
  }
  private _showTitle: boolean = true;

  /**
   * Whether to show a user initials (if no picture specified) or not
   * @type boolean
   */
  @Input()
  get showInitials(): boolean {
    return this._showInitials;
  }
  set showInitials(val: boolean) {
    this._showInitials = this.convertToBoolProperty(val);
  }
  private _showInitials: boolean = true;

  /**
   * Whether to show only a picture or also show the name and title
   * @type boolean
   */
  @Input()
  get onlyPicture(): boolean {
    return !this.showName && !this.showTitle;
  }
  set onlyPicture(val: boolean) {
    this.showName = this.showTitle = !this.convertToBoolProperty(val);
  }

  /**
   * Size of the component.
   * Possible values: `tiny`, `small`, `medium` (default), `large`, 'giant'.
   */
  @Input() size: string = 'medium';

  /**
   * Shape of the picture box.
   * Possible values: `rectangle`, `semi-round`, `round (default)`.
   */
  @Input() shape: string = 'round';

  @HostBinding('class.size-tiny')
  get tiny(): boolean {
    return this.size === 'tiny';
  }

  @HostBinding('class.size-small')
  get small(): boolean {
    return this.size === 'small';
  }

  @HostBinding('class.size-medium')
  get medium(): boolean {
    return this.size === 'medium';
  }

  @HostBinding('class.size-large')
  get large(): boolean {
    return this.size === 'large';
  }

  @HostBinding('class.size-giant')
  get giant(): boolean {
    return this.size === 'giant';
  }

  @HostBinding('class.shape-rectangle')
  get rectangle(): boolean {
    return this.shape === 'rectangle';
  }

  @HostBinding('class.shape-semi-round')
  get semiRound(): boolean {
    return this.shape === 'semi-round';
  }

  @HostBinding('class.shape-round')
  get round(): boolean {
    return this.shape === 'round';
  }

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit() {}

  getInitials(): string {
    if (this.name) {
      const names = this.name.split(' ');

      return names
        .map((n) => n.charAt(0))
        .splice(0, 2)
        .join('')
        .toUpperCase();
    }

    return '';
  }

  convertToBoolProperty(val: any): boolean {
    if (typeof val === 'string') {
      val = val.toLowerCase().trim();

      return val === 'true' || val === '';
    }

    return !!val;
  }
}
