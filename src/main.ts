interface BirthDetails {
  date: Date;
  time?: string;
  location: Location;
}

interface Location {
  latitude: number;
  longitude: number;
}

interface ChartResult {
  zodiacPositions: ZodiacPosition[];
  houses: Houses[];
  aspects: Aspects[];
}

class NatalChart {
  public static generateChart(birthDetails: BirthDetails): ChartResult {
  }
}
