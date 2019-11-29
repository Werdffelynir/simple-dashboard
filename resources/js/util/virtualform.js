const rulesDefault = {
    size: 1024 * 100 * 2,
    types: ['jpg','jpeg', 'png']
};

const createVirtualForm = () => {
    const input = document.createElement('input');
    input.type = 'file';
    let FileUploadPath = input.value;

    return {
        selectFile: function (callback, rules = rulesDefault) {
            let err = false;
            let errTypes = [];
            const eve = new MouseEvent('click');
            input.dispatchEvent(eve);
            input.addEventListener('change', () => {
                [].slice.call(input.files).forEach((file) => {

                    if (file.size > rules.size) {
                        err = true;
                        errTypes.push('size');
                    }
                    if (!rules.types.includes(file.type.split('/')[1])) {
                        err = true;
                        errTypes.push('types');
                    }

                });
                callback.call(eve, input.files, err, errTypes);
            });
        },
    }

};


export default createVirtualForm;
