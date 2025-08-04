'use client';

import { useForm } from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Props } from 'next/script';

const placeValidationSchema = z.object({
    name: z.string().min(3, 'Nome muito curto!'),
    type: z.enum(['restaurante', 'bar', 'hotel']),
    phone: z.string().min(8, 'Telefone Inváilido!'),
    lat: z.number(),
    lng: z.number()
})

type PlaceFormData = z.infer<typeof placeValidationSchema>

export default function PlaceForm({lat, lng}:any) {

    const {register, handleSubmit, formState: {errors, isSubmitSuccessful}} = useForm<PlaceFormData>({
        resolver: zodResolver(placeValidationSchema),
        defaultValues: {
            lat,
            lng
        }
    })

    const onSubmit = (data: PlaceFormData) => {
       alert("Dados do local enviados!"); 
    }

    return (

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

            {/* Nome */}
            <div>
                <label>Nome:</label>
                <input className="w-full border rounded px-2 py-1" type="text" {...register('name')}/>
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            {/* Tipo */}
            <select {...register("type")}>
                <option>Escolha um...</option>
                <option value="restaurante">Restaurante</option>
                <option value="bar">Bar</option>
                <option value="hotel">Hotel</option>
            </select>
            {errors.type && <p className='text-red-500'>{errors.type.message}</p>}
            {/* Telefone */}
            {/* Longitude */}
            <div>
                <label>Longitude: </label>
                <input value={lng} readOnly className='border rounded px-2 py-1 bg-gray-100'/>
            </div>

            {/* Latitude */}
            <div>
                <label>Latitude: </label>
                <input value={lat} readOnly className='border rounded px-2 py-1 bg-gray-100'/>
            </div>

            <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 cursor-pointer">Registrar Local</button>
        </form>

    )
}