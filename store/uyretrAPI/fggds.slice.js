import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_fggd_list = createAsyncThunk(
  "fggds/api_v1_fggd_list",
  async payload => {
    const response = await apiService.api_v1_fggd_list(payload)
    return response.data
  }
)
export const api_v1_fggd_create = createAsyncThunk(
  "fggds/api_v1_fggd_create",
  async payload => {
    const response = await apiService.api_v1_fggd_create(payload)
    return response.data
  }
)
export const api_v1_fggd_retrieve = createAsyncThunk(
  "fggds/api_v1_fggd_retrieve",
  async payload => {
    const response = await apiService.api_v1_fggd_retrieve(payload)
    return response.data
  }
)
export const api_v1_fggd_update = createAsyncThunk(
  "fggds/api_v1_fggd_update",
  async payload => {
    const response = await apiService.api_v1_fggd_update(payload)
    return response.data
  }
)
export const api_v1_fggd_partial_update = createAsyncThunk(
  "fggds/api_v1_fggd_partial_update",
  async payload => {
    const response = await apiService.api_v1_fggd_partial_update(payload)
    return response.data
  }
)
export const api_v1_fggd_destroy = createAsyncThunk(
  "fggds/api_v1_fggd_destroy",
  async payload => {
    const response = await apiService.api_v1_fggd_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const fggdsSlice = createSlice({
  name: "fggds",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_fggd_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fggd_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fggd_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fggd_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fggd_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fggd_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fggd_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fggd_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fggd_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fggd_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fggd_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fggd_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fggd_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fggd_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fggd_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fggd_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fggd_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fggd_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_fggd_list,
  api_v1_fggd_create,
  api_v1_fggd_retrieve,
  api_v1_fggd_update,
  api_v1_fggd_partial_update,
  api_v1_fggd_destroy,
  slice: fggdsSlice
}
