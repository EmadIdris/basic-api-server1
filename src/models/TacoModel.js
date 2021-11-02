'use strict';

class TacoModel{
  constructor(){
    this.id = 0;
    this.db = [];
  }
  get(id) {
    if (id) {
      return this.db.find(record => record.id === id); 
    } else { 
      return this.db; 
    }
  }
  post(obj) {
    const postObject = {
      id: ++this.id, 
      name: obj.name,
      type: obj.type,
    };
    this.db.push(postObject); 
    return postObject; 
  }
  update(id, obj) {
    let errors = {};
    if (!id) {
      if(!obj.id) {
        errors.id = 'Please use an id with PUT';
        return errors;
      }
    } else {
      
      if (!obj) { 
        let needDataError = 'No update to this taco specified...';
        return needDataError; 
      } else {
        if(!obj.name) {
          errors.name = 'Please add a taco name';
        }
        if(!obj.type) {
          errors.type = 'Please add a taco type';
        }
        if(Object.keys(errors).length > 0) {
          return errors;
        }

        // 
        let dbObj = this.db.find(record => record.id === id); 
        dbObj = {...dbObj, ...obj};
        return dbObj;
      }
    }
  }
  delete(id) {
    let errors = {};
    if (!id) {
      errors.type = 'Please add a taco id';
      return errors;
    } else {
      this.db = this.db.filter(record => {
        if (record.id !== id) {
          return record; 
        }
      });
    }
  }
}

module.exports = TacoModel;