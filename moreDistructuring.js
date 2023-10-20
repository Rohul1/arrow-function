const bussinessMan = [
    {
        status: "successfull Bussinessman",

        data: [
            { name: "Rohul Amin", group: "meghna", state: "bangladesh", brandValue: 2000000000, companyAddree: { FirstAdd: "Rampura, Dhaka ", secondAdd: "Gazipur, Dhaka" } },

            { name: "Jakaria", group: "jamuna", state: "bangladesh", brandValue: 3000000000, companyAddree: { FirstAdd: "Rampura, Dhaka ", secondAdd: "malibug, Dhaka" } },

            { name: "Mohon", group: "Basundhara", state: "bangladesh", brandValue: 4000000000, companyAddree: { FirstAdd: "Rampura, Dhaka ", secondAdd: "Shamali, Dhaka" } },

            { name: "Ashik", group: "akij", state: "bangladesh", brandValue: 5000000000, companyAddree: { FirstAdd: "Rampura, Dhaka ", secondAdd: "kushtia, Dhaka" } },

            { name: "Akib", group: "English", state: "bangladesh", brandValue: 1000000000, companyAddree: { FirstAdd: "Rampura, Dhaka ", secondAdd: "mirpur, Dhaka" } }
        ]
    }
]
console.log(bussinessMan[0].data[3].brandValue);