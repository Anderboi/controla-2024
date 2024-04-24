export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      contacts: {
        Row: {
          contact: string
          created_at: string | null
          user_id: string
        }
        Insert: {
          contact: string
          created_at?: string | null
          user_id: string
        }
        Update: {
          contact?: string
          created_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "contacts_contact_fkey"
            columns: ["contact"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contacts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      database: {
        Row: {
          address: string | null
          created_at: string
          description: string | null
          has_models: boolean
          id: number
          name: string
          phone: string | null
          price_range: string
          type: string
          url: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string
          description?: string | null
          has_models?: boolean
          id?: number
          name: string
          phone?: string | null
          price_range?: string
          type: string
          url?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string
          description?: string | null
          has_models?: boolean
          id?: number
          name?: string
          phone?: string | null
          price_range?: string
          type?: string
          url?: string | null
        }
        Relationships: []
      }
      designprojects: {
        Row: {
          address_city: string | null
          address_country: string | null
          address_street: string | null
          client_id: string | null
          contract_id: string | null
          cover_img: string | null
          created_at: string | null
          project_id: number
          project_name: string | null
          stage: number
          user_id: string
        }
        Insert: {
          address_city?: string | null
          address_country?: string | null
          address_street?: string | null
          client_id?: string | null
          contract_id?: string | null
          cover_img?: string | null
          created_at?: string | null
          project_id?: number
          project_name?: string | null
          stage?: number
          user_id?: string
        }
        Update: {
          address_city?: string | null
          address_country?: string | null
          address_street?: string | null
          client_id?: string | null
          contract_id?: string | null
          cover_img?: string | null
          created_at?: string | null
          project_id?: number
          project_name?: string | null
          stage?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "designprojects_stage_fkey"
            columns: ["stage"]
            isOneToOne: false
            referencedRelation: "project_stages"
            referencedColumns: ["id"]
          },
        ]
      }
      engeneering_data: {
        Row: {
          conditioning: string[] | null
          electric: string[] | null
          heating: string[] | null
          plumbing: string[] | null
          project_id: number
        }
        Insert: {
          conditioning?: string[] | null
          electric?: string[] | null
          heating?: string[] | null
          plumbing?: string[] | null
          project_id?: number
        }
        Update: {
          conditioning?: string[] | null
          electric?: string[] | null
          heating?: string[] | null
          plumbing?: string[] | null
          project_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "engeneering_data_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: true
            referencedRelation: "projects"
            referencedColumns: ["project_id"]
          },
        ]
      }
      favourite_projects: {
        Row: {
          created_at: string | null
          project_id: number
          user_id: string
        }
        Insert: {
          created_at?: string | null
          project_id: number
          user_id: string
        }
        Update: {
          created_at?: string | null
          project_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "favourite_projects_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["project_id"]
          },
          {
            foreignKeyName: "favourite_projects_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      inhabitant_info: {
        Row: {
          age: number | null
          client_id: string | null
          created_at: string | null
          gender: string | null
          health_concerns: string | null
          id: number
          lifestyle: string | null
          name: string | null
          project_id: number | null
        }
        Insert: {
          age?: number | null
          client_id?: string | null
          created_at?: string | null
          gender?: string | null
          health_concerns?: string | null
          id?: number
          lifestyle?: string | null
          name?: string | null
          project_id?: number | null
        }
        Update: {
          age?: number | null
          client_id?: string | null
          created_at?: string | null
          gender?: string | null
          health_concerns?: string | null
          id?: number
          lifestyle?: string | null
          name?: string | null
          project_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "inhabitant_info_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inhabitant_info_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["project_id"]
          },
        ]
      }
      lookup_engeneering: {
        Row: {
          description_ru: string | null
          id: number
          label_ru: string | null
          name: string | null
        }
        Insert: {
          description_ru?: string | null
          id?: number
          label_ru?: string | null
          name?: string | null
        }
        Update: {
          description_ru?: string | null
          id?: number
          label_ru?: string | null
          name?: string | null
        }
        Relationships: []
      }
      project_info: {
        Row: {
          area: number | null
          created_at: string | null
          project_id: number
          purpose: string | null
          residing: number | null
          stage: number
          storeys: number
        }
        Insert: {
          area?: number | null
          created_at?: string | null
          project_id?: number
          purpose?: string | null
          residing?: number | null
          stage: number
          storeys?: number
        }
        Update: {
          area?: number | null
          created_at?: string | null
          project_id?: number
          purpose?: string | null
          residing?: number | null
          stage?: number
          storeys?: number
        }
        Relationships: [
          {
            foreignKeyName: "project_info_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: true
            referencedRelation: "designprojects"
            referencedColumns: ["project_id"]
          },
          {
            foreignKeyName: "project_info_stage_fkey"
            columns: ["stage"]
            isOneToOne: false
            referencedRelation: "project_stages"
            referencedColumns: ["id"]
          },
        ]
      }
      project_stages: {
        Row: {
          id: number
          label_ru: string | null
          name: string
        }
        Insert: {
          id?: number
          label_ru?: string | null
          name: string
        }
        Update: {
          id?: number
          label_ru?: string | null
          name?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          address_city: string | null
          address_country: string | null
          address_street: string | null
          area: number | null
          client_id: string | null
          cover_img: string | null
          created_at: string | null
          project_id: number
          stage: number
          user_id: string | null
          userId: string | null
        }
        Insert: {
          address_city?: string | null
          address_country?: string | null
          address_street?: string | null
          area?: number | null
          client_id?: string | null
          cover_img?: string | null
          created_at?: string | null
          project_id?: number
          stage?: number
          user_id?: string | null
          userId?: string | null
        }
        Update: {
          address_city?: string | null
          address_country?: string | null
          address_street?: string | null
          area?: number | null
          client_id?: string | null
          cover_img?: string | null
          created_at?: string | null
          project_id?: number
          stage?: number
          user_id?: string | null
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_stage_fkey"
            columns: ["stage"]
            isOneToOne: false
            referencedRelation: "project_stages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      room_furnishing: {
        Row: {
          brand: string | null
          created_at: string
          id: string
          isDelivered: boolean
          isOrdered: boolean
          link: string | null
          materials: string[] | null
          name: string | null
          price: number | null
          project_id: number
          quantity: number | null
          room_number: number
          tech_spec: string | null
        }
        Insert: {
          brand?: string | null
          created_at?: string
          id?: string
          isDelivered?: boolean
          isOrdered?: boolean
          link?: string | null
          materials?: string[] | null
          name?: string | null
          price?: number | null
          project_id: number
          quantity?: number | null
          room_number: number
          tech_spec?: string | null
        }
        Update: {
          brand?: string | null
          created_at?: string
          id?: string
          isDelivered?: boolean
          isOrdered?: boolean
          link?: string | null
          materials?: string[] | null
          name?: string | null
          price?: number | null
          project_id?: number
          quantity?: number | null
          room_number?: number
          tech_spec?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "room_furnishing_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["project_id"]
          },
        ]
      }
      room_info: {
        Row: {
          area: number | null
          furnishing: string | null
          name: string
          project_id: number
          room_number: number
          storey: number
        }
        Insert: {
          area?: number | null
          furnishing?: string | null
          name: string
          project_id: number
          room_number: number
          storey?: number
        }
        Update: {
          area?: number | null
          furnishing?: string | null
          name?: string
          project_id?: number
          room_number?: number
          storey?: number
        }
        Relationships: [
          {
            foreignKeyName: "room_info_furnishing_fkey"
            columns: ["furnishing"]
            isOneToOne: false
            referencedRelation: "room_furnishing"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "room_info_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["project_id"]
          },
        ]
      }
      team_members: {
        Row: {
          created_at: string | null
          team_id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          team_id: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          team_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          created_at: string | null
          team_id: string
          team_name: string | null
        }
        Insert: {
          created_at?: string | null
          team_id: string
          team_name?: string | null
        }
        Update: {
          created_at?: string | null
          team_id?: string
          team_name?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          avatar_url: string | null
          billing_address: Json | null
          email: string | null
          full_name: string | null
          id: string
          payment_method: Json | null
          phone_number: string | null
          role: string | null
        }
        Insert: {
          avatar_url?: string | null
          billing_address?: Json | null
          email?: string | null
          full_name?: string | null
          id: string
          payment_method?: Json | null
          phone_number?: string | null
          role?: string | null
        }
        Update: {
          avatar_url?: string | null
          billing_address?: Json | null
          email?: string | null
          full_name?: string | null
          id?: string
          payment_method?: Json | null
          phone_number?: string | null
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      working_stage: {
        Row: {
          description: string | null
          id: number
          isDone: boolean
          project_id: number
          sheet: string
          task_name: string
        }
        Insert: {
          description?: string | null
          id?: number
          isDone?: boolean
          project_id: number
          sheet: string
          task_name: string
        }
        Update: {
          description?: string | null
          id?: number
          isDone?: boolean
          project_id?: number
          sheet?: string
          task_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "working_stage_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["project_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      requesting_user_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
