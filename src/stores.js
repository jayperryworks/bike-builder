import { writable } from 'svelte/store'

export const frames = writable([])

export const groupsets = writable([])

export const parts = writable([
  {
    name:'Bottom bracket',
    options: [
      {
        id: 'test',
        brand: 'Test',
        model: 'Awesome 3001',
        weight: 1000,
        selected: true,
        buy: [
          {
            storeName: 'Merlin',
            link: 'https://google.com',
            price: 100,
            notes: 'Test test test',
            selected: true
          },
          {
            storeName: 'Jenson',
            link: 'https://google.com',
            price: 120,
            notes: 'Test test test',
            selected: false
          }
        ]
      },
      {
        id: 'test2',
        brand: 'Test2',
        model: 'Awesome 3002',
        weight: 1050,
        selected: false,
        buy: [
          {
            storeName: 'Merlin',
            link: 'https://google.com',
            price: 110,
            notes: 'Test test test',
            selected: false
          },
          {
            storeName: 'Jenson',
            link: 'https://google.com',
            price: 130,
            notes: 'Test test test',
            selected: true
          }
        ]
      }
    ]
  },
  {
    'name':'Wheelset',
    'options': []
  },
  {
    'name':'Tires',
    'options': []
  },
  {
    'name':'Handlebars',
    'options': []
  },
  {
    'name':'Stem',
    'options': []
  },
  {
    'name':'Headset',
    'options': []
  },
  {
    'name':'Pedals',
    'options': []
  },
  {
    'name':'Seatpost',
    'options': []
  },
  {
    'name':'Seat',
    'options': []
  },
  {
    'name':'Bottle cages',
    'options': []
  }
])
