'use strict';

const sortCode = require('../sort-code-is-building-society');

describe('sort code', () => {
  describe(' error messages ', () => {
    it(' should be thrown when contains more then 6 numbers', () => {
      expect(sortCode('11122233444')).toEqual('Error: Sort Code is not 6 characters');
    });
    it(' should be thrown when contains less then 6 numbers', () => {
      expect(sortCode('1122')).toEqual('Error: Sort Code is not 6 characters');
    });
    it(' should be thrown when contains characters ', () => {
      expect(sortCode('AAAAAA')).toEqual('Error: Sort Code should only contain numbers');
    });
  });

  describe(' for Cumberland Building Society (16-52-21)', () => {
    it(' should return is true when 16-52-21 is supplied', () => {
      expect(sortCode('16-52-21')).toEqual(true);
    });
    it(' should return is false when 17-52-21 is supplied', () => {
      expect(sortCode('17-52-21')).toEqual(false);
    });
    it(' should return is false when 16-51-21 is supplied', () => {
      expect(sortCode('16-51-21')).toEqual(false);
    });
    it(' should return is false when 16-50-21 is supplied', () => {
      expect(sortCode('16-50-21')).toEqual(false);
    });
    it(' should return is false when 16-50-20 is supplied', () => {
      expect(sortCode('16-50-20')).toEqual(false);
    });
    it(' should return is false when 16-50-22 is supplied', () => {
      expect(sortCode('16-50-20')).toEqual(false);
    });
  });

  describe(' for The Coventry Building Society (40-63-01)', () => {
    it(' should return is true when 40-63-01 is supplied', () => {
      expect(sortCode('40-63-01')).toEqual(true);
    });
    it(' should return is false when 41-63-01 is supplied', () => {
      expect(sortCode('41-63-01')).toEqual(false);
    });
    it(' should return is false when 39-63-01 is supplied', () => {
      expect(sortCode('39-63-01')).toEqual(false);
    });
    it(' should return is false when 40-62-01 is supplied', () => {
      expect(sortCode('40-62-01')).toEqual(false);
    });
    it(' should return is false when 40-60-01 is supplied', () => {
      expect(sortCode('40-60-01')).toEqual(false);
    });
    it(' should return is false when 40-63-00 is supplied', () => {
      expect(sortCode('40-63-00')).toEqual(false);
    });
    it(' should return is false when 40-63-02 is supplied', () => {
      expect(sortCode('40-63-02')).toEqual(false);
    });
  });

  describe(' for Norwich & Peterborough Building Society (40-65-00)', () => {
    it(' should return is true when 40-65-00 is supplied', () => {
      expect(sortCode('40-65-00')).toEqual(true);
    });
    it(' should return is false when 39-65-00 is supplied', () => {
      expect(sortCode('39-65-00')).toEqual(false);
    });
    it(' should return is false when 41-65-00 is supplied', () => {
      expect(sortCode('41-65-00')).toEqual(false);
    });
    it(' should return is false when 40-64-00 is supplied', () => {
      expect(sortCode('40-64-00')).toEqual(false);
    });
    it(' should return is false when 40-64-00 is supplied', () => {
      expect(sortCode('40-66-00')).toEqual(false);
    });
    it(' should return is true when 40-65-01 is supplied', () => {
      expect(sortCode('40-65-01')).toEqual(false);
    });
  });

  describe(' for Nationwide Building Society (07-00 to 07-49)', () => {
    it(' should return is true when 07-00 to 07-49 is supplied', () => {
      expect(sortCode('07-00-03')).toEqual(true);
      expect(sortCode('07-20-04')).toEqual(true);
      expect(sortCode('07-49-05')).toEqual(true);
    });
    it(' should return is false when 07-50 supplied', () => {
      expect(sortCode('07-50-00')).toEqual(false);
    });
  }); 
  
  describe(' for clearing accounts for building societies (08-60 to 08-61)', () => {
    it(' should return is true when 08-60 to 08-61 is supplied', () => {
      expect(sortCode('08-60-00')).toEqual(true);
      expect(sortCode('08-61-00')).toEqual(true);
    });
    it(' should return is false when 07-60', () => {
      expect(sortCode('07-60-00')).toEqual(false);
    });
    it(' should return is false when 09-60', () => {
      expect(sortCode('09-60-00')).toEqual(false);
    });
    it(' should return is false when 08-59', () => {
      expect(sortCode('08-59-00')).toEqual(false);
    });
    it(' should return is false when 08-62', () => {
      expect(sortCode('08-62-00')).toEqual(false);
    });
  });
});