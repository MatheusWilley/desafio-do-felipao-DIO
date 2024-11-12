let nameAndExperience = [
    ["Mario", 7560],
    ["Luigi", 5890],
    ["Princesa Peach", 6320]
]

for (i = 0; i < 3; i++) {

    if (nameAndExperience[i][1] <= 1000) {
        console.log("O Herói de Nome " + nameAndExperience[i][0] + " está no nível de Ferro")
    }
    else if (nameAndExperience[i][1] > 1000 && nameAndExperience[i][1] <= 2000) {
        console.log("O Herói de Nome " + nameAndExperience[i][0] + " está no nível de Bronze")
    }
    else if (nameAndExperience[i][1] > 2000 && nameAndExperience[i][1] <= 5000) {
        console.log("O Herói de Nome " + nameAndExperience[i][0] + " está no nível de Prata")
    }
    else if (nameAndExperience[i][1] > 5000 && nameAndExperience[i][1] <= 7000) {
        console.log("O Herói de Nome " + nameAndExperience[i][0] + " está no nível de Ouro")
    }
    else if (nameAndExperience[i][1] > 7000 && nameAndExperience[i][1] <= 8000) {
        console.log("O Herói de Nome " + nameAndExperience[i][0] + " está no nível de Platina")
    }
    else if (nameAndExperience[i][1] > 8000 && nameAndExperience[i][1] <= 9000) {
        console.log("O Herói de Nome " + nameAndExperience[i][0] + " está no nível de Ascendente")
    }
    else if (nameAndExperience[i][1] > 9000 && nameAndExperience[i][1] <= 10000) {
        console.log("O Herói de Nome " + nameAndExperience[i][0] + " está no nível de Imortal")
    }
    else {
        console.log("O Herói de Nome " + nameAndExperience[i][0] + " está no nível de Radiante")
    }

}

