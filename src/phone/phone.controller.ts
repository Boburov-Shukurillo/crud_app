import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Phone } from './schemas/phone.schema';
import { PhoneService } from './phone.service';

@Controller('phone')
export class PhoneController {
    constructor(private readonly phoneService: PhoneService) { }

    @Post('create')
    create(@Body() createPhoneDto: Partial<Phone>) {
        return this.phoneService.create(createPhoneDto);
    }

    @Get('all')
    findAll() {
        return this.phoneService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.phoneService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatePhoneDto: Partial<Phone>) {
        return this.phoneService.update(id, updatePhoneDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.phoneService.remove(id);
    }
}
