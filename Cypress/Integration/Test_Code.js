
describe('My First Test', () => 
{
    it('should succeed', () => 
    {
        expect(true).to.equal(true)
    })

    it("should succeed", () =>
    {
        expect(1).to.not.equal(2)
    })

    it("should succeed", () =>
    {
        let i = 5
        let j = 7
        let k = i + j
        console.log(`${i} plus ${j} is ${k}`)
        expect(k).to.equal(i+j)
    })

})
