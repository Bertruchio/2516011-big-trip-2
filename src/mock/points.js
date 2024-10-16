import { getRandomElement } from '../utils/utils.js';

const mockPoints = [
  {
    id: 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    basePrice: 1100,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    destination: 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    isFavorite: false,
    offer: ['b4c3e4e6-9053-42ce-b747-e281314baa31', 'e3f4e556-89c3-41bb-bae2-45b2d58d5512'],
    type: 'taxi'
  },
  {
    id: 'c3b24350-293f-4c3d-a702-94eec4a2809a',
    basePrice: 600,
    dateFrom: '2019-08-10T10:55:56.845Z',
    dateTo: '2019-08-10T14:22:13.375Z',
    destination: 'd1c24c1e-a8cf-11eb-bcbc-0242ac130002',
    isFavorite: true,
    offer: ['e6c2e5a8-8af4-11eb-8dcd-0242ac130003', 'h8e2e1f9-8af4-11eb-8dcd-0242ac130006'],
    type: 'bus'
  },
  {
    id: 'a1d24350-1111-4c3d-a702-94eec4a2809a',
    basePrice: 800,
    dateFrom: '2019-09-12T09:15:56.845Z',
    dateTo: '2019-09-12T12:45:13.375Z',
    destination: 'e8c3b27f-a8cf-11eb-bcbc-0242ac130002',
    isFavorite: false,
    offer: ['f7c3a3a8-8af4-11eb-8dcd-0242ac130004', 'i8d3f1f9-8af4-11eb-8dcd-0242ac130007'],
    type: 'train'
  },
  {
    id: 'f2b24350-293f-4c3d-a702-94eec4a2809a',
    basePrice: 1500,
    dateFrom: '2019-10-15T13:30:56.845Z',
    dateTo: '2019-10-15T18:00:13.375Z',
    destination: 'f9b5db61-b1fe-4b77-a83c-0e528e910e04',
    isFavorite: true,
    offer: ['h9c8e8a8-8af4-11eb-8dcd-0242ac130005', 'j9e8e1f9-8af4-11eb-8dcd-0242ac130008'],
    type: 'flight'
  }
];

function getRandomPoints() {
  return getRandomElement(mockPoints);
}

export { getRandomPoints };
