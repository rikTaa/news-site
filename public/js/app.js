"use strict";
// Here's my data model
class ViewModel {
    constructor(first, last) {
        this.firstName = ko.observable(first);
        this.lastName = ko.observable(last);
        this.fullName = ko.pureComputed(() => {
            // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
            return this.firstName() + " " + this.lastName();
        }, this);
    }
    ;
}
ko.applyBindings(new ViewModel("Planet", "Earth")); // This makes Knockout get to work
// End of data model
