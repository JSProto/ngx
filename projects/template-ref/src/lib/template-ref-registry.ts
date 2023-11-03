import { Injectable, TemplateRef } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class TemplateRegistry extends Map<string, TemplateRef<any>> {}
