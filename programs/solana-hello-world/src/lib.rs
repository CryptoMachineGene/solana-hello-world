use anchor_lang::prelude::*;

declare_id!("GWTzAruVThiratXikUeYHo8F1ruZJQiVvfWczQRiwNX9");

#[program]
pub mod solana_hello_world {
    use super::*;
    pub fn hello(_ctx: Context<Hello>) -> Result<()> {
        msg!("👋 Hello, Solana!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Hello {}
