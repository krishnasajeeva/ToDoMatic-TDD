import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';
import props from './Form';


describe("Checking the basic element of Form",()=>{
    it("should have input",()=>{
        const {getByTestId}= render(<Form/>);
        expect(getByTestId("formInput")).toBeDefined();
    })
    it("should have input",()=>{
        const {getByText}= render(<Form/>);
        expect(getByText("Add")).toBeDefined();
    })
     it("should have Input field type as text",()=>{
        const {getByTestId}= render(<Form/>);
        expect(getByTestId("formInput")).toHaveAttribute("type","text")
     })
    it("button should not be disabled when Input have some value",()=>{

        const {getByTestId,getByRole}= render(<Form/>)
        const input1=getByTestId("formInput")
        fireEvent.change(input1,{"target":{"value":"omn"}})
        const btn= getByRole("button",{"name":"Add"})
        expect(btn).not.toBeDisabled()

    })
    
})
/*describe("Checking the basic element of Form",()=>{
    //const handleSubmit=jest.fn()
    const addTask=jest.fn()
    it("should have input",()=>{
        const {getByText}= render(<Form handleSubmit={handleSubmit}/>);
        fireEvent.click(getByText("Add"))
        expect(handleSubmit).toHaveBeenCalled();

    });
     
    
});*/
    


