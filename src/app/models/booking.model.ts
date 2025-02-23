import { City } from './ciltyList.model';

export class BookingPost {
  userid: number;
  carid: number;
  cityid: number;
  subscriptiontenure: number;
  monthlyFees: number;
  taxPercentage: number;
  taxAmount: number;
  bookingCharge: number;
  processingFees: number;
  depositAmount: number;
  totalPayableAmount: number;
}

export interface BookingGet {
  id: number;
  userid: number;
  useremail: string;
  car: Car;
  city: City;
  subscriptiontenure: number;
  monthlyFees: number;
  taxPercentage: number;
  taxAmount: number;
  bookingCharge: number;
  processingFees: number;
  depositAmount: number;
  totalPayableAmount: number;
  cretedon: string;
  isActive: boolean;
  updatedon: any;
}

export interface Car {
  imageURL: string;
  carName: string;
  fuelType: string;
  transmissionType: string;
  isHybrid: boolean;
  isNew: boolean;
  segments: string;
  brand: string;
  id: number;
  cretedon: string;
  updatedon: string;
  isActive: boolean;
  isDeleted: boolean;
}
