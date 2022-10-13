import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import {forwardRef} from 'react';
import {FieldError} from 'react-hook-form';


interface InputProps extends ChakraInputProps{
    name: string;
    label?: string;
    error?: FieldError;
}

//Encaminhamento de Ref no formulario, transformar a function em const

const InputBase = ({name, label, error=null, ...rest}:InputProps, ref) =>{

    return (
        <FormControl isInvalid={!!error}> 
            {!! label && <FormLabel htmlFor={name}>{label}</FormLabel> }

            <ChakraInput 
            name={name} 
            id={name}
            type="email"
            // placeholder="Your email"
            focusBorderColor='pink.500'
            bg="gray.900"
            variant="filled"
            _hover={{
                bg: 'gray.900'
            }}
            size="lg"
            {...rest}
            />
            {!!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}
            
        </FormControl> 
    );
}

export const Input = forwardRef(InputBase);