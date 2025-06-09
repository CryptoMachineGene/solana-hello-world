use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkgMQz1fZFtVv");

#[program]
pub mod solana_hello_world {
    use super::*;
    pub fn hello(ctx: Context<Hello>) -> Result<()> {
        msg!("👋 Hello, Solana!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Hello {}
