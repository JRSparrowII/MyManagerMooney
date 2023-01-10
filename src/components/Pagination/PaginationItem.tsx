import {Button } from '@chakra-ui/react'

interface PaginationItemProps{
    number: number;
    isCurrent?: boolean,
    onPageChange: (page: number) => void;
}

export function PaginationItem ({isCurrent = false, onPageChange, number}:PaginationItemProps){
    if(isCurrent){
        return (
            <Button 
                size="sm" 
                fontSize="xl" 
                width="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bg: "pink.500",
                    cursor: "default",
                }}
            >
                {number}
            </Button>
        );
    }
    return(
        <Button 
            size="sm" 
            fontSize="xl" 
            width="4"
            colorScheme="gray.700"   
            _hover={{
                bg: "gray.500",
            }}  
            onClick={() => onPageChange(number)}           
        >
            {number}
        </Button>
    );
}