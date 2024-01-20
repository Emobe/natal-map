interface DateRange {
  start: Date,
  end: Date
};

class Zodiac {
  constructor(
    public sign: string,
    public element: ZodiacElement,
    public dateRange: DateRange
  ) {
  }

  getDescription(): string {
    return `${this.sign} is an ${this.element} sign`;
  }
}

export default Zodiac;

