class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    // eslint-disable-next-line node/no-unsupported-features/es-syntax
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    // 1B) Advanced filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.query.find(JSON.parse(queryStr));
    // let query = await Tour.find(JSON.parse(queryStr));
    return this;
  }

  sort() {
    // if (this.queryString.sort) {
    //   if (this.queryString.sort.charAt(0) === '-') {
    //     this.query = this.query.sort((a, b) => b.price - a.price);
    //   } else {
    //     this.query = this.query.sort((a, b) => a.price - b.price);
    //   }
    // }
    return this;
  }

  limitFields() {
    // 3) Field limiting - some problems with query.select (not a function error)
    // if (req.query.fields) {
    //   const fields = req.query.fields.split(',').join(' ');
    //   query = query.select(fields);
    // }
    return this;
  }

  paginate() {
    // const page = req.query.page * 1 || 1;
    // const limit = req.query.limit * 1 || 1;
    // const skip = (page - 1) * limit;
    // // query = query.skip(skip).limit(limit);

    // if (req.query.page) {
    //   const numTours = await Tour.countDocuments();
    //   if (skip >= numTours) {
    //     throw new Error('This page does not exist');
    //   }
    // }
    return this;
  }
}

module.exports = APIFeatures;
