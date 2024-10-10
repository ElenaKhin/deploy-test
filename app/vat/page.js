"use client"
import React from "react";
import { useForm } from "react-hook-form";

export default function Home() {
    const { register, handleSubmit } = useForm();
    const [vat, setVat] = React.useState(0);
    const rate = process.env.VAT_RATE;

    const handleForm = (data) => {
        console.debug(data);
        const v = Math.round(data.price * rate * 100) / 100;
        setVat(v);
    }

    return (
        <div>
            <h1>VAT Calculator</h1>
            <form onSubmit={handleSubmit(handleForm)}>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Price:</label></td>
                            <td><input type="number" {...register("price", { valueAsNumber: true })} /></td>
                        </tr>
                        <tr>
                            <td><label>VAT Rate:</label></td>
                            <td><input type="number" value={rate} readOnly {...register("rate")} /></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <input type="submit" value="Calculate" />
                            </td>
                        </tr>
                        <tr>
                            <td><label>VAT:</label></td>
                            <td><input type="text" value={vat} readOnly /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}
