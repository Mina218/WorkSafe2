import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/demo/service/country.service';

@Component({
    templateUrl: './invalidstatedemo.component.html'
})
export class InvalidStateDemoComponent implements OnInit {

    countries: any[] = [];

    cities: any[];

    filteredCountries: any[] = [];

    value1: any;

    value2: any;

    value3: any;

    value4: any;

    value5: any;

    value6: any;

    value7: any;

    value8: any;

    value9: any;

    value10: any;

    constructor(private countryService: CountryService) {
        this.cities = [
            { type: 'New York', code: 'NY' },
            { type: 'Rome', code: 'RM' },
            { type: 'London', code: 'LDN' },
            { type: 'Istanbul', code: 'IST' },
            { type: 'Paris', code: 'PRS' }
        ];
    }

    ngOnInit() {
        this.countryService.getCountries().then(countries => {
            this.countries = countries;
        });
    }

    searchCountry(event: any) {
        // in a real application, make a request to a remote url with the query and return filtered results,
        // for demo we filter at client side
        const filtered: any[] = [];
        const query = event.query;
        for (let i = 0; i < this.countries.length; i++) {
            const country = this.countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }

}
