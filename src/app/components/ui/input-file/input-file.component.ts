import {
  booleanAttribute,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

type DeleteEventType = [files: File[], file: File];

function formatSizeUnits(countBytes: number): string {
  const dictionary: Record<string, number> = {
    GB: 1073741824,
    MB: 1048576,
    KB: 1024,
  };

  const formatBytes = (key: string) => {
    const count: string = (countBytes / dictionary[key]).toFixed(2);
    return [count, key].join(' ');
  };

  let bytes: string;

  if (countBytes >= dictionary['GB']) bytes = formatBytes('GB');
  else if (countBytes >= dictionary['MB']) bytes = formatBytes('MB');
  else if (countBytes >= dictionary['KB']) bytes = formatBytes('KB');
  else bytes = [countBytes, 'B'].join(' ');

  return bytes;
}

@Component({
  selector: 'app-input-file',
  standalone: true,
  imports: [],
  templateUrl: './input-file.component.html',
  styleUrl: './input-file.component.scss',
})
export class InputFileComponent implements OnInit {
  @ViewChild('inputFile') inputFile: ElementRef;
  @Input({ transform: booleanAttribute }) multiple: boolean = false;
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Output() change: EventEmitter<File[]> = new EventEmitter<File[]>();
  @Output() delete: EventEmitter<DeleteEventType> =
    new EventEmitter<DeleteEventType>();
  @HostListener('dragover', ['$event']) onDragOver(event: Event) {
    this.areaClass = 'drop';
    event.preventDefault();
  }
  @HostListener('dragenter', ['$event']) onDragEnter(event: Event) {
    this.areaClass = 'drop';
    event.preventDefault();
  }
  @HostListener('dragend', ['$event']) onDragEnd(event: Event) {
    this.areaClass = 'drag';
    event.preventDefault();
  }
  @HostListener('dragleave', ['$event']) onDragLeave(event: Event) {
    this.areaClass = 'drag';
    event.preventDefault();
  }
  @HostListener('drop', ['$event']) onDrop(event: DragEvent) {
    this.areaClass = 'drag';
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer?.files) {
      const files: FileList = event.dataTransfer.files;
      if (this.multiple) {
        this.files = [...files];
      } else {
        this.files = [files[0]];
      }
      this.change.emit([...this.files]);
    }
  }
  protected areaClass: 'drag' | 'drop';
  protected files: File[] = [];

  ngOnInit(): void {
    this.areaClass = 'drag';
  }

  get title() {
    if (this.disabled) return '';
    if (this.files.length)
      return this.files.map((file: File) => file.name).join('\n');
    return this.multiple ? 'Файлы не выбраны.' : 'Файл не выбран.';
  }

  getName(file: File) {
    return `${file.name} (${formatSizeUnits(file.size)})`;
  }

  onClick() {
    this.inputFile.nativeElement.click();
  }

  onChange(event: Event) {
    event.preventDefault();
    const input = event.target as HTMLInputElement;
    const files: FileList = input.files!;
    if (!this.multiple) this.files = [];
    this.files.push(...files);
    this.change.emit([...files]);
  }

  onDelete(event: Event, index: number) {
    event.stopPropagation();
    const [file] = this.files.splice(index, 1);
    const values: DeleteEventType = [[...this.files], file];
    this.delete.emit(values);
  }
}
