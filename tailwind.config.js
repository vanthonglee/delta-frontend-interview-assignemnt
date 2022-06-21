module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            aspectRatio: {
                "mv-banner": "100 / 148",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("daisyui")],
};
