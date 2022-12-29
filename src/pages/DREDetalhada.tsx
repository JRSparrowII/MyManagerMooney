import { Header } from "../components/Header/Index";
import { Summary } from "../components/Form/summary";
import { SideBar } from "../components/Sidebar/index";
import {Flex, Box, Text, Select, Table, Thead, Tr, Th, Td, Tbody, SimpleGrid, Divider, Heading, VStack } from '@chakra-ui/react'
import dynamic from "next/dynamic";
import { theme } from "../styles/theme";
import { Tooltip } from "@chakra-ui/core";
// import { Select } from "../components/Form/Select";
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
};

export default function OthersReports(){
    return (
      <Flex direction="column" height="100vh"> 
        <Header/> 
        <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <SideBar />
          {/* //flex dentro da box abaixo = ocupar toda a largura possivel */}
          <Box flex="1" borderRadius={8} bg="gray.800" p="8"> 
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">DRE Detalhada</Heading>
            <Select width="30%" placeholder='Selecione o mes'variant='filled'bg="gray.700" color="gray.500">
              <option value='option1'>Janeiro</option>
              <option value='option2'>Fevereiro</option>
              <option value='option3'>Março</option>
            </Select>   
          </Flex>             
            <Divider my="6" borderColor="gray.700"></Divider>
            {/* <VStack spacing="8"> */}
                <Flex direction="column">  
                <Text ml="6">Ver detalhes da receita</Text>                 
                    <SimpleGrid minChildWidth="240px" spacing="3" width="100%" mb="10">     
                        <Table colorScheme="whiteAlpha" width="100%">
                            <Thead>
                                <Tr>                                
                                    <Th fontSize="20" color="whatsapp.500">RECEITAS</Th>
                                    <Th fontSize="20" color="whatsapp.500">31.582,00</Th> 
                                    <Th fontSize="20" color="whatsapp.500">100%</Th>                                                            
                                </Tr>
                            </Thead>                             
                            <Tbody>
                                <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                    <Td fontSize="sm">FGTS</Td>
                                    <Td fontSize="sm">1.000,00 R$</Td>  
                                    <Td fontSize="sm">25%</Td>                                                            
                                </Tr>
                                <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                    <Td fontSize="sm">Salario</Td>
                                    <Td fontSize="sm">251,00 R$</Td>  
                                    <Td fontSize="sm">25%</Td>                                                            
                                </Tr>  
                                <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                    <Td fontSize="sm">Venda do carro</Td>
                                    <Td fontSize="sm">291,00 R$</Td> 
                                    <Td fontSize="sm">25%</Td>                                                             
                                </Tr> 
                                <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                    <Td fontSize="sm">Trabalhos Realizados</Td>
                                    <Td fontSize="sm">22,00 R$</Td> 
                                    <Td fontSize="sm">25%</Td>                                                             
                                </Tr> 
                                <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                    <Td fontSize="sm">13º Salario</Td>
                                    <Td fontSize="sm">651,00 R$</Td>  
                                    <Td fontSize="sm">25%</Td>                                                            
                                </Tr>                 
                            </Tbody>
                        </Table>
                    
                        <Chart
                            chartType="PieChart"
                            data={data}
                            options={options}
                            width={"100%"}
                            height={"400px"}
                        />
                    </SimpleGrid>

                    <SimpleGrid minChildWidth="240px" spacing="3" width="100%" mb="10">
                        <Table colorScheme="whiteAlpha" width="100%" >
                            <Thead>
                                <Tr>                                
                                    <Th fontSize="20" color="red.600">DESPESAS</Th>
                                    <Th fontSize="20" color="red.600">22.512,00</Th>  
                                    <Th fontSize="20" color="red.600">100%</Th>                                                          
                                </Tr>
                            </Thead> 
                            <Tbody>
                                <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                    <Td fontSize="sm">Acessorios pessoais</Td>
                                    <Td fontSize="sm">1.000,00 R$</Td>   
                                    <Td fontSize="sm">25%</Td>                                                           
                                </Tr>
                                <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                    <Td fontSize="sm">Compras e supermercado</Td>
                                    <Td fontSize="sm">251,00 R$</Td>
                                    <Td fontSize="sm">15%</Td>                                                              
                                </Tr>  
                                <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                    <Td fontSize="sm">Salao de beleza</Td>
                                    <Td fontSize="sm">291,00 R$</Td> 
                                    <Td fontSize="sm">20%</Td>                                                             
                                </Tr> 
                                <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                    <Td fontSize="sm">Games</Td>
                                    <Td fontSize="sm">22,00 R$</Td>  
                                    <Td fontSize="sm">18%</Td>                                                            
                                </Tr> 
                                <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                    <Td fontSize="sm">Brincadeiras e Festas</Td>
                                    <Td fontSize="sm">651,00 R$</Td>  
                                    <Td fontSize="sm">12%</Td>                                                            
                                </Tr>                 
                            </Tbody>
                        </Table>

                        <Chart
                            chartType="PieChart"
                            data={data}
                            options={options}
                            width={"100%"}
                            height={"400px"}
                        />
                    </SimpleGrid>

                    <SimpleGrid minChildWidth="240px" spacing="3" width="100%" mb="10">
                        <Table colorScheme="whiteAlpha" width="100%">
                            <Thead>
                                <Tr>                                
                                    <Th fontSize="20" color="blue.600">INVESTIMENTOS</Th>
                                    <Th fontSize="20" color="blue.600">22.512,00</Th>
                                    <Th fontSize="20" color="blue.600">100%</Th>                                                             
                                </Tr>
                            </Thead> 
                            <Tbody>
                                <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                    <Td fontSize="sm">Acessorios pessoais</Td>
                                    <Td fontSize="sm">1.000,00 R$</Td> 
                                    <Td fontSize="sm">12%</Td>                                                             
                                </Tr>
                                <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                    <Td fontSize="sm">Compras e supermercado</Td>
                                    <Td fontSize="sm">251,00 R$</Td> 
                                    <Td fontSize="sm">12%</Td>                                                             
                                </Tr>  
                                <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                    <Td fontSize="sm">Salao de beleza</Td>
                                    <Td fontSize="sm">291,00 R$</Td> 
                                    <Td fontSize="sm">12%</Td>                                                             
                                </Tr> 
                                <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                    <Td fontSize="sm">Games</Td>
                                    <Td fontSize="sm">22,00 R$</Td>
                                    <Td fontSize="sm">12%</Td>                                                              
                                </Tr> 
                                <Tr px={["4","6"]} _hover={{bg: 'gray.700'}}>
                                    <Td fontSize="sm">Brincadeiras e Festas</Td>
                                    <Td fontSize="sm">651,00 R$</Td> 
                                    <Td fontSize="sm">12%</Td>                                                             
                                </Tr>                 
                            </Tbody>
                        </Table>

                        <Chart
                            chartType="PieChart"
                            data={data}
                            options={options}
                            width={"100%"}
                            height={"400px"}
                        />
                    </SimpleGrid>

                    <Text mt="10">Lucro do Periodo: 12.000,00 R$</Text>
                   
                </Flex>
          </Box>
        </Flex>   
      </Flex>        
    )
}
