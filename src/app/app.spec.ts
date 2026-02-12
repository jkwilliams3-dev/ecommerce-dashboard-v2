import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have title property', () => {
    expect(component.title).toBe('ecommerce-dashboard-v2');
  });

  it('should initialize on ngOnInit', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    component.ngOnInit();
    expect(consoleSpy).toHaveBeenCalledWith('E-commerce Dashboard initialized');
  });

  it('should render header with E-commerce Dashboard title', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const header = compiled.querySelector('.header h1');
    expect(header?.textContent).toContain('E-commerce Dashboard');
  });

  it('should render metrics cards', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const metricCards = compiled.querySelectorAll('.metric-card');
    expect(metricCards.length).toBeGreaterThan(0);
  });

  it('should display Total Sales metric', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Total Sales');
  });

  it('should display Total Orders metric', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Total Orders');
  });

  it('should display Average Order Value metric', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Average Order Value');
  });

  it('should display Customer Satisfaction metric', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Customer Satisfaction');
  });

  it('should have sales chart canvas', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const canvas = compiled.querySelector('#salesChart');
    expect(canvas).toBeTruthy();
  });

  it('should initialize sales chart after view init', () => {
    const initChartSpy = vi.spyOn(component, 'initSalesChart');
    component.ngAfterViewInit();
    expect(initChartSpy).toHaveBeenCalled();
  });

  it('should have metric cards with icons', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const icons = compiled.querySelectorAll('.metric-icon');
    expect(icons.length).toBeGreaterThan(0);
  });

  it('should display metric values', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const metricValues = compiled.querySelectorAll('.metric-value');
    expect(metricValues.length).toBeGreaterThan(0);
  });

  it('should display metric changes with percentages', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const metricChanges = compiled.querySelectorAll('.metric-change');
    expect(metricChanges.length).toBeGreaterThan(0);
  });

  it('should have chart section', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const chartSection = compiled.querySelector('.chart-section');
    expect(chartSection).toBeTruthy();
  });

  it('should display Weekly Sales Performance title', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Weekly Sales Performance');
  });
});
