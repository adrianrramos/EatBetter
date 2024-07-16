

type dietCalculatorProps = {
    weight: number,
    height: number,
    bodyFat: number,
    age: number,
    dietType: string
}

const dietCalculator = ({weight, height, bodyFat, age, dietType}: dietCalculatorProps) => {
    const cals = weight * 17;
    if (dietType === 'lose weight') {
        return cals - 500;
    } else if (dietType === 'gain muscle') {
        return cals + 250
    }

}