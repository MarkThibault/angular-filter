export default function MultiPropertyFilter() {
    return (items, properties, filterText) => {
        if (!filterText) {
            return items;
        } else {
            let filtered = [];
            if (items) {
                items.forEach((item) => {
                    let matchItem = false;
                    for (let i = 0; i < properties.length; i++) {
                        let propertyToString = item[properties[i]] !== null ? item[properties[i]].toString() : null;
                        if (propertyToString !== null && propertyToString.toLowerCase().indexOf(filterText.toLowerCase()) !== -1) {
                            matchItem = true;
                            break;
                        }
                    };
                    if (matchItem) {
                        filtered.push(item);
                    }
                });
            }
            return filtered;
        }
    };
}