const button = document.querySelector(".calculate");

button.addEventListener("click", function () {

    const month = Number(document.querySelector(".month").value);
    const day = Number(document.querySelector(".day").value);

    const today = new Date();
    let birthday = new Date(today.getFullYear(), month, day);

    if (birthday < today) {
        birthday.setFullYear(today.getFullYear() + 1);
    }

    const difference = birthday - today;
    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));

    document.querySelector(".days").textContent = daysLeft;

    document.querySelector(".birthday").textContent =
        birthday.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric"
        });

    document.querySelector(".message").textContent =
        `Your birthday is in ${daysLeft} days.`;

    document.querySelector(".year").textContent =
        birthday.getFullYear();

    document.querySelector(".hours").textContent =
        `${daysLeft * 24} hours`;

    document.querySelector(".week").textContent =
        birthday.toLocaleDateString("en-US", {
            weekday: "long"
        });
});