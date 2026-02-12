import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ecommerce-dashboard-v2';

  ngOnInit() {
    console.log('E-commerce Dashboard initialized');
  }

  ngAfterViewInit() {
    this.initSalesChart();
  }

  initSalesChart() {
    const ctx = document.getElementById('salesChart') as HTMLCanvasElement;
    if (!ctx) return;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Sales',
            data: [12400, 19800, 15300, 22100, 18900, 25600, 21400],
            backgroundColor: 'rgba(16, 185, 129, 0.7)',
            borderColor: '#10b981',
            borderWidth: 2,
            borderRadius: 8,
            hoverBackgroundColor: '#10b981',
          },
          {
            label: 'Orders',
            data: [89, 142, 110, 158, 135, 183, 153],
            backgroundColor: 'rgba(20, 184, 166, 0.7)',
            borderColor: '#14b8a6',
            borderWidth: 2,
            borderRadius: 8,
            hoverBackgroundColor: '#14b8a6',
            yAxisID: 'y1',
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: '#94a3b8',
              font: {
                size: 12,
                weight: 'bold'
              },
              padding: 15,
              usePointStyle: true,
            }
          },
          tooltip: {
            backgroundColor: 'rgba(15, 31, 23, 0.95)',
            titleColor: '#10b981',
            bodyColor: '#e8f5e9',
            borderColor: '#10b981',
            borderWidth: 2,
            padding: 12,
            displayColors: true,
            callbacks: {
              label: (context) => {
                const label = context.dataset.label || '';
                const value = context.parsed.y;
                if (value === null || value === undefined) return label;
                if (label === 'Sales') {
                  return `${label}: $${value.toLocaleString()}`;
                }
                return `${label}: ${value}`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              color: 'rgba(16, 185, 129, 0.1)',
            },
            ticks: {
              color: '#94a3b8',
              font: {
                size: 11,
                weight: 'bold'
              }
            },
            border: {
              color: '#10b981'
            }
          },
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            grid: {
              color: 'rgba(16, 185, 129, 0.1)',
            },
            ticks: {
              color: '#94a3b8',
              font: {
                size: 11
              },
              callback: (value) => '$' + value.toLocaleString()
            },
            border: {
              color: '#10b981'
            }
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
              drawOnChartArea: false,
            },
            ticks: {
              color: '#94a3b8',
              font: {
                size: 11
              }
            },
            border: {
              color: '#14b8a6'
            }
          }
        }
      }
    });
  }
}
