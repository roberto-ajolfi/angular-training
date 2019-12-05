export default class TicketEdit {
    constructor(
        public id: number,
        public issueDate: Date,
        public categoryid: number,
        public title: string,
        public description: string,
        public priorityid: number,
        public stateid: number
    ) {}
}