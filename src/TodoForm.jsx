import { Formik } from 'formik';
import React from 'react';
import { Form } from 'react-router';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { Card,
          CardAction,
          CardContent,
          CardDescription,
          CardFooter,
          CardHeader,
          CardTitle, } from './components/ui/card';
import { Label } from './components/ui/label';
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group';
import { Checkbox } from './components/ui/checkbox';
import {  Select,
            SelectContent,
            SelectGroup,
            SelectItem,
            SelectLabel,
            SelectTrigger,
            SelectValue, } from './components/ui/select';
import { Textarea } from './components/ui/textarea';

export default function TodoForm() {

  return (
    <div>
          <Card className="w-full max-w-sm border-none shadow-lg">
          <CardHeader>
            <CardTitle> <h2 className='text-2xl font-bold text-center'>Add Some Todo</h2></CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
           </CardHeader>
          <CardContent>
            <Formik
              initialValues={{
                username:'',
                email: '',
                gender: 'male',
                hobbies: [],
                country: '',
                message: '',}}

              onSubmit={(values) => {
                console.log(values);
              }}
              >
              
              {({values, handleChange, handleSubmit, errors, touched, setFieldValue}) => {
                return <form
                onSubmit={handleSubmit} className="space-y-4">
                  
                  <div>
                  < Label htmlFor="email">Email</Label>
                  <input
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  id="email"
                  type="email"
                  placeholder= "email"/>
                  {errors.email && touched.email && <p className='text-red-500'>{errors.email}</p> }
                  </div>

                  <div>
                  < Label htmlFor="username">UserName</Label>
                  <input
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  id="username"
                  placeholder= "username"/>

                  {errors.username && touched.username && <p className='text-red-500'>{errors.username}</p> }
                  </div>

                  <div className='space-y-4'>
                   <h4>Select your Gender</h4>
                    <RadioGroup
                      name="gender"
                      onChange={handleChange}
                      defaultValue="Male" className="flex gap-5">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="Male" id="r1" className="cursor-pointer" />
                      <Label htmlFor="r1">Male</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="Female" id="r2" className="cursor-pointer" />
                      <Label htmlFor="r2">Female</Label>
                    </div>
                  </RadioGroup>
                  </div>

                  <div className="flex flex-col gap-6">
                     <h2>Select your Habits</h2>
                     <div className="flex items-center gap-3">
                      <Checkbox
                      onCheckedChange={(e)=>{
                        if(e){
                          setFieldValue('hobbies', [...values.hobbies, 'sleeping']);
                        }else{
                          setFieldValue ('hobbies', values.hobbies.filter((habit) => habit !== 'sleeping'));
                        }
                      }}
                      name="hobbies" id="ch1" value="sleeping" />
                      <Label htmlFor="sleeping">Sleeping</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <Checkbox
                      onCheckedChange={(e)=>{
                        if(e){
                          setFieldValue('hobbies', [...values.hobbies, 'coding']);
                        }else{
                          setFieldValue ('hobbies', values.hobbies.filter((habit) => habit !== 'coding'));
                        }
                      }}
                      name="hobbies" id="ch2" value="coding" />
                      <Label htmlFor="coding">Coding</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <Checkbox
                      onCheckedChange={(e)=>{
                        if(e){
                          setFieldValue('hobbies', [...values.hobbies, 'swimming']);
                        }else{
                          setFieldValue ('hobbies', values.hobbies.filter((habit) => habit !== 'swimming'));
                        }
                      }}
                      name="hobbies" id="ch3" value="swimming" />
                      <Label htmlFor="swimming">Swimming</Label>
                    </div>
                    </div>
                  
                  <div>
                    <h4>Select you Country</h4>
                    <Select 
                    onValueChange={(e)=> setFieldValue('country', e)}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select your Country" />
                    </SelectTrigger>
                    <SelectContent className={'bg-white'}>
                      <SelectGroup>
                        <SelectLabel className={'text-xl font-bold'}>Country</SelectLabel>
                        <SelectItem value="nepal">Nepal</SelectItem>
                        <SelectItem value="india">India</SelectItem>
                        <SelectItem value="china">China</SelectItem>
                        <SelectItem value="srilanka">Sri lanka</SelectItem>
                        <SelectItem value="maldives">maldives</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  </div>

                  <div>
                    <Textarea
                    onChange={handleChange}
                    value={values.message}
                    id="message"  
                    name="message"
                    placeholder="Type your message here." />
                  </div>
                  <Button type='submit'>Submit</Button>
                    </form>
                }} 
              
            </Formik>
          </CardContent>
        </Card>

                





        
    </div>
  )
}
