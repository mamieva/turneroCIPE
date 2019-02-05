import { ChangeDetectorRef, Component, NgZone, OnDestroy, ViewChild, HostListener, Directive, AfterViewInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItems } from '../../../shared/menu-items/menu-items';
import { lookupService } from '../../../services/lookupService.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class AppSidebarComponent {
  mobileQuery: MediaQueryList;
  currentUser: any = {};
  officeId: any = {};
  modules: any;
  itemSidebar: any[] = [];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public menuItems: MenuItems, private lookupService: lookupService) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')).person;
    this.officeId = localStorage.getItem('currentSection');
  }
  ngOnInit() {
    let really = this;
    this.lookupService.getModules(this.officeId).subscribe((response: any) => {
      really.modules = response;
      really.filterModules();
    });

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  filterModules() {
    let really = this;
    let items: any = this.menuItems.getMenuitem();
    items.forEach(element => {
      really.modules.forEach(module => {
       //debugger
        if (
          (element.name == 'Bandeja de Entrada' && module.code == 'INBOX_SHOW') ||
          (element.name == 'CM - Nacimiento' && module.code == 'NACIMIENTOS_MIGRACION') ||
          (element.name == 'CM - Defunción' && module.code == 'DEFUNCION_MIGRACION') ||
          (element.name == 'CM - Matrimonio' && module.code == 'MATRIMONIO_MIGRACION')||
          (element.name == 'CM - Reconocimiento' && module.code == 'RECONOCIMIENTO_MIGRACION')||
          (element.name == 'CM - Union Convivencial' && module.code == 'UNION_CONVIVENCIAL_MIGRACION')
        ) {
          really.itemSidebar.push(element);
        }
      });
    });
    this.itemSidebar.push(
      { state: 'logout', name: 'Cerrar Sesión', type: 'link', icon: 'close' }, )
  }
}