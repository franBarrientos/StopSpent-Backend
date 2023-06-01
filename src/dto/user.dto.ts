import { IsNumber, IsOptional, IsString, IsNotEmpty, IsEmail, Length, IsBoolean } from "class-validator"; 

export class UserDTO {
    @IsString()
    @IsNotEmpty()
    @Length(2,50)
    name!: string
    
    @IsNotEmpty()
    @IsString()
    @Length(2,50)
    surname!: string

    @IsOptional()
    @IsBoolean()
    google!: boolean
    
    @IsNumber()
    salary!: number

    @IsNotEmpty()    
    password!: string

    @IsEmail()
    @IsNotEmpty()
    email!: string
}

export class LoginDto{
    @IsEmail()
    @IsNotEmpty()
    email!: string

    @IsNotEmpty()    
    password!: string
}