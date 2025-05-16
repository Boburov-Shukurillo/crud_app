import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Phone } from './schemas/phone.schema';
import { Model } from 'mongoose';

@Injectable()
export class PhoneService {
    constructor(@InjectModel(Phone.name) private phoneModel: Model<Phone>) { }

    async create(data: Partial<Phone>): Promise<Phone> {
        const phone = new this.phoneModel(data);
        return phone.save();
    }

    async findAll(): Promise<Phone[]> {
        return this.phoneModel.find().exec();
    }

    async findOne(id: string): Promise<Phone> {
        const phone = await this.phoneModel.findById(id);
        if (!phone) throw new NotFoundException('Phone not found');
        return phone;
    }

    async update(id: string, data: Partial<Phone>): Promise<Phone> {
        const updated = await this.phoneModel.findByIdAndUpdate(id, data, { new: true });
        if (!updated) throw new NotFoundException('Phone not found');
        return updated;
    }

    async remove(id: string): Promise<void> {
        const result = await this.phoneModel.findByIdAndDelete(id);
        if (!result) throw new NotFoundException('Phone not found');
    }
}
